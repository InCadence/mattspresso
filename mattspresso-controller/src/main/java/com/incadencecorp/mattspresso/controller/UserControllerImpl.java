package com.incadencecorp.mattspresso.controller;

import com.incadencecorp.coalesce.common.exceptions.CoalesceDataFormatException;
import com.incadencecorp.coalesce.common.exceptions.CoalesceException;
import com.incadencecorp.coalesce.framework.CoalesceFramework;
import com.incadencecorp.coalesce.search.CoalesceSearchFramework;
import com.incadencecorp.coalesce.services.crud.service.data.controllers.AbstractObjectController;
import com.incadencecorp.mattspresso.api.IUserController;
import com.incadencecorp.mattspresso.datamodel.impl.coalesce.entity.UserCoalesceEntity;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.UserPojoEntity;

public class UserControllerImpl extends AbstractMattspressoController<UserPojoEntity, UserCoalesceEntity>
        implements IUserController {

    public UserControllerImpl(CoalesceSearchFramework framework)
    {
        super(framework);
    }

    @Override
    protected UserCoalesceEntity createEntity()
    {
        return new UserCoalesceEntity();
    }

    @Override
    protected UserPojoEntity fromCoalesce(UserCoalesceEntity entity) throws CoalesceDataFormatException
    {
        return new UserPojoEntity(entity);
    }

    @Override
    protected UserCoalesceEntity toCoalesce(UserCoalesceEntity entity, UserPojoEntity pojo) throws CoalesceException
    {
        entity.populate(pojo);
        return entity;
    }

}
