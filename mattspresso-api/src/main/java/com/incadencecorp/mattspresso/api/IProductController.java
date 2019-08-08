import com.incadencecorp.coalesce.services.common.jaxrs.IObjectControllerJaxRs;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.ProductPojoEntity;

@Path("product")
public interface IProductController extends IObjectControllerJaxRs<ProductPojoEntity> {

}