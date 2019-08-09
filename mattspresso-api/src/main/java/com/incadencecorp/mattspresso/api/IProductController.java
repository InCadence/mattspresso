package com.incadencecorp.mattspresso.api;

import com.incadencecorp.coalesce.services.common.jaxrs.IObjectControllerJaxRs;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.ProductPojoEntity;

import javax.ws.rs.Path;

@Path("product")
public interface IProductController extends IMattspressoControllerJaxRs<ProductPojoEntity> {

}
