package com.incadencecorp.mattspresso.controller;

import com.incadencecorp.coalesce.common.exceptions.CoalesceDataFormatException;
import com.incadencecorp.coalesce.common.exceptions.CoalesceException;
import com.incadencecorp.coalesce.framework.CoalesceFramework;
import com.incadencecorp.coalesce.search.CoalesceSearchFramework;
import com.incadencecorp.coalesce.services.crud.service.data.controllers.AbstractObjectController;
import com.incadencecorp.mattspresso.api.IPurchaseController;
import com.incadencecorp.mattspresso.datamodel.impl.coalesce.entity.PurchaseCoalesceEntity;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.PurchasePojoEntity;

public class PurchaseControllerImpl extends AbstractMattspressoController<PurchasePojoEntity, PurchaseCoalesceEntity>
        implements IPurchaseController {

    public PurchaseControllerImpl(CoalesceSearchFramework framework)
    {
        super(framework);
    }

    @Override
    protected PurchaseCoalesceEntity createEntity()
    {
        return new PurchaseCoalesceEntity();
    }

    @Override
    protected PurchasePojoEntity fromCoalesce(PurchaseCoalesceEntity entity) throws CoalesceDataFormatException
    {
        return new PurchasePojoEntity(entity);
    }

    @Override
    protected PurchaseCoalesceEntity toCoalesce(PurchaseCoalesceEntity entity, PurchasePojoEntity pojo)
            throws CoalesceException
    {
        entity.populate(pojo);
        return entity;
    }

}
