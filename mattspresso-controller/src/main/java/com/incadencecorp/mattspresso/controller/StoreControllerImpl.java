package com.incadencecorp.mattspresso.controller;

import com.incadencecorp.coalesce.common.exceptions.CoalesceDataFormatException;
import com.incadencecorp.coalesce.common.exceptions.CoalesceException;
import com.incadencecorp.coalesce.framework.CoalesceFramework;
import com.incadencecorp.coalesce.search.CoalesceSearchFramework;
import com.incadencecorp.coalesce.services.crud.service.data.controllers.AbstractObjectController;
import com.incadencecorp.mattspresso.api.IStoreController;
import com.incadencecorp.mattspresso.datamodel.impl.coalesce.entity.StoreCoalesceEntity;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.StorePojoEntity;

public class StoreControllerImpl extends AbstractMattspressoController<StorePojoEntity, StoreCoalesceEntity>
        implements IStoreController {

    public StoreControllerImpl(CoalesceSearchFramework framework)
    {
        super(framework);
    }

    @Override
    protected StoreCoalesceEntity createEntity()
    {
        return new StoreCoalesceEntity();
    }

    @Override
    protected StorePojoEntity fromCoalesce(StoreCoalesceEntity entity) throws CoalesceDataFormatException
    {
        return new StorePojoEntity(entity);
    }

    @Override
    protected StoreCoalesceEntity toCoalesce(StoreCoalesceEntity entity, StorePojoEntity pojo) throws CoalesceException
    {
        entity.populate(pojo);
        return entity;
    }

}
