package com.incadencecorp.mattspresso.api;

import com.incadencecorp.coalesce.services.common.jaxrs.IObjectControllerJaxRs;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.InventoryPojoEntity;

import javax.ws.rs.Path;

@Path("inventory")
public interface IInventoryController extends IMattspressoControllerJaxRs<InventoryPojoEntity> {

}
