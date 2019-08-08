package com.incadencecorp.mattspresso.controller;

import com.incadencecorp.coalesce.common.exceptions.CoalesceDataFormatException;
import com.incadencecorp.coalesce.common.exceptions.CoalesceException;
import com.incadencecorp.coalesce.framework.CoalesceFramework;
import com.incadencecorp.coalesce.services.crud.service.data.controllers.AbstractObjectController;
import com.incadencecorp.mattspresso.api.IInventoryController;
import com.incadencecorp.mattspresso.datamodel.impl.coalesce.entity.InventoryCoalesceEntity;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.InventoryPojoEntity;

public class InventoryControllerImpl extends AbstractObjectController<InventoryPojoEntity, InventoryCoalesceEntity>
        implements IInventoryController {

    public InventoryControllerImpl(CoalesceFramework framework)
    {
        super(framework);
    }

    @Override
    protected InventoryCoalesceEntity createEntity()
    {
        return new InventoryCoalesceEntity();
    }

    @Override
    protected InventoryPojoEntity fromCoalesce(InventoryCoalesceEntity entity) throws CoalesceDataFormatException
    {
        return new InventoryPojoEntity(entity);
    }

    @Override
    protected InventoryCoalesceEntity toCoalesce(InventoryCoalesceEntity entity, InventoryPojoEntity pojo)
            throws CoalesceException
    {
        entity.populate(pojo);
        return entity;
    }

}
