import com.incadencecorp.coalesce.services.common.jaxrs.IObjectControllerJaxRs;
import com.incadencecorp.mattspresso.datamodel.impl.pojo.entity.InventoryPojoEntity;

@Path("inventory")
public interface IInventoryController extends IObjectControllerJaxRs<InventoryPojoEntity> {

}