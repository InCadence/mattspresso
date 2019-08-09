/*-----------------------------------------------------------------------------'
 Copyright 2019 - InCadence Strategic Solutions Inc., All Rights Reserved

 Notwithstanding any contractor copyright notice, the Government has Unlimited
 Rights in this work as defined by DFARS 252.227-7013 and 252.227-7014.  Use
 of this work other than as specifically authorized by these DFARS Clauses may
 violate Government rights in this work.

 DFARS Clause reference: 252.227-7013 (a)(16) and 252.227-7014 (a)(16)
 Unlimited Rights. The Government has the right to use, modify, reproduce,
 perform, display, release or disclose this computer software and to have or
 authorize others to do so.

 Distribution Statement D. Distribution authorized to the Department of
 Defense and U.S. DoD contractors only in support of U.S. DoD efforts.
 -----------------------------------------------------------------------------*/

package com.incadencecorp.mattspresso.controller;

import com.incadencecorp.coalesce.api.persistance.EPersistorCapabilities;
import com.incadencecorp.coalesce.common.exceptions.CoalesceException;
import com.incadencecorp.coalesce.framework.datamodel.CoalesceEntity;
import com.incadencecorp.coalesce.search.CoalesceSearchFramework;
import com.incadencecorp.coalesce.search.api.QueryHelper;
import com.incadencecorp.coalesce.search.api.SearchResults;
import com.incadencecorp.coalesce.search.factory.CoalescePropertyFactory;
import com.incadencecorp.coalesce.services.api.search.SortByType;
import com.incadencecorp.coalesce.services.crud.service.data.controllers.AbstractObjectController;
import com.incadencecorp.coalesce.services.search.service.data.model.SearchQuery;
import com.incadencecorp.mattspresso.api.IMattspressoControllerJaxRs;
import org.geotools.data.Query;
import org.geotools.filter.text.cql2.CQL;
import org.geotools.filter.text.cql2.CQLException;
import org.opengis.filter.Filter;
import org.opengis.filter.FilterFactory2;
import org.opengis.filter.sort.SortBy;
import org.opengis.filter.sort.SortOrder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.sql.rowset.CachedRowSet;
import java.rmi.RemoteException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Derek Clemenzi
 */
public abstract class AbstractMattspressoController<T, E extends CoalesceEntity> extends AbstractObjectController<T, E>
        implements IMattspressoControllerJaxRs<T> {

    private static final Logger LOGGER = LoggerFactory.getLogger(AbstractMattspressoController.class);

    private static final FilterFactory2 FF = CoalescePropertyFactory.getFilterFactory();

    private CoalesceSearchFramework framework;

    AbstractMattspressoController(CoalesceSearchFramework framework)
    {
        super(framework);

        this.framework = framework;
    }

    @Override
    public List<Map<String, String>> query(SearchQuery searchQuery) throws RemoteException
    {
        Filter filter;

        try
        {
            filter = CQL.toFilter(searchQuery.getCql());
        }
        catch (CQLException e)
        {
            throw new RemoteException("(FAILED) Parsing CQL", e);
        }

        if (searchQuery.isUserLimited())
        {
            filter = FF.and(filter, CoalescePropertyFactory.getCreatedBy(getPrincipal().getName()));
        }

        // Convert Sort
        SortBy[] sortBy = new SortBy[searchQuery.getSortBy().size()];
        for (int ii = 0; ii < searchQuery.getSortBy().size(); ii++)
        {
            SortByType sort = searchQuery.getSortBy().get(ii);

            sortBy[ii] = FF.sort(sort.getPropertyName(), SortOrder.valueOf(sort.getSortOrder().toString()));
        }

        LOGGER.info(searchQuery.getCql());

        Query query = new Query(searchQuery.getType());
        query.setFilter(filter);
        query.setPropertyNames(searchQuery.getPropertyNames());
        query.setSortBy(sortBy);
        query.setStartIndex(
                searchQuery.getPageNumber() > 0 ? (searchQuery.getPageNumber() - 1) * searchQuery.getPageSize() : 0);
        query.setMaxFeatures(searchQuery.getPageSize());

        if (searchQuery.getCapabilities().contains(EPersistorCapabilities.HIGHLIGHT))
        {
            QueryHelper.setHighlightingEnabled(query, true);
        }

        try
        {
            return createResponse(framework.searchBulk(searchQuery.getCapabilities(), query).get(0),
                                  searchQuery.getPropertyNames());
        }
        catch (CoalesceException | InterruptedException e)
        {
            throw new RemoteException(e.getMessage(), e);
        }
    }

    private List<Map<String, String>> createResponse(SearchResults searchResults, List<String> properties)
            throws RemoteException
    {
        if (!searchResults.isSuccessful())
        {
            throw new RemoteException(searchResults.getError());
        }

        try (CachedRowSet rowset = searchResults.getResults())
        {
            List<Map<String, String>> results = new ArrayList<>();

            if (rowset.first())
            {
                // Obtain list of keys
                do
                {
                    int idx = 1;

                    Map<String, String> result = new HashMap<>();
                    result.put("entityKey", rowset.getString(idx++));

                    if (properties != null)
                    {
                        for (String property : properties)
                        {
                            result.put(property, rowset.getString(idx++));
                        }
                    }

                    results.add(result);
                }
                while (rowset.next());
            }
            return results;
        }
        catch (SQLException e)
        {
            throw new RemoteException(e.getMessage(), e);
        }
    }
}
