package com.incadencecorp.mattspresso.api;

import javax.ws.rs.Path;

import com.incadencecorp.coalesce.services.common.jaxrs.IObjectControllerJaxRs;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.UserPojoEntity;

@Path("user")
public interface IUserController extends IObjectControllerJaxRs<UserPojoEntity> {

}