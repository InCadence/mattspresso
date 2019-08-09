package com.incadencecorp.mattspresso.api;

import javax.ws.rs.Path;

import com.incadencecorp.coalesce.services.common.jaxrs.IObjectControllerJaxRs;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.StorePojoEntity;

@Path("store")
public interface IStoreController extends IMattspressoControllerJaxRs<StorePojoEntity> {

}
