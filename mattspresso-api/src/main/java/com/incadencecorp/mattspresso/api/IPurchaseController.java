import com.incadencecorp.coalesce.services.common.jaxrs.IObjectControllerJaxRs;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.PurchasePojoEntity;

@Path("purchase")
public interface IPurchaseController extends IObjectControllerJaxRs<PurchasePojoEntity> {

}
