package com.incadencecorp.mattspresso.api;

import com.incadencecorp.coalesce.services.common.jaxrs.IObjectControllerJaxRs;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.PurchasePojoEntity;

import javax.ws.rs.Path;

@Path("purchase")
public interface IPurchaseController extends IObjectControllerJaxRs<PurchasePojoEntity> {

}
