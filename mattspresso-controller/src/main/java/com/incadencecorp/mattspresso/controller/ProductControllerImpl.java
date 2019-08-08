package com.incadencecorp.mattspresso.controller;

import com.incadencecorp.coalesce.common.exceptions.CoalesceDataFormatException;
import com.incadencecorp.coalesce.common.exceptions.CoalesceException;
import com.incadencecorp.coalesce.framework.CoalesceFramework;
import com.incadencecorp.coalesce.services.crud.service.data.controllers.AbstractObjectController;
import com.incadencecorp.mattspresso.api.IProductController;
import com.incadencecorp.mattspresso.datamodel.impl.coalesce.entity.ProductCoalesceEntity;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.ProductPojoEntity;

public class ProductControllerImpl extends AbstractObjectController<ProductPojoEntity, ProductCoalesceEntity>
        implements IProductController {

            public ProductControllerImpl(CoalesceFramework framework) {
                super(framework);
            }
        
            @Override
            protected ProductCoalesceEntity createEntity() {
                return new ProductCoalesceEntity();
            }
        
            @Override
            protected ProductPojoEntity fromCoalesce(ProductCoalesceEntity entity) throws CoalesceDataFormatException {
                return new ProductPojoEntity(entity);
            }
        
            @Override
            protected ProductCoalesceEntity toCoalesce(ProductCoalesceEntity entity, ProductPojoEntity pojo) throws CoalesceException {
                entity.populate(pojo);
                return entity;
            }

        }