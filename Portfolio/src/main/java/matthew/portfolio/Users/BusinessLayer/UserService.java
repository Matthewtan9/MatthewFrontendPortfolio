package matthew.portfolio.Users.BusinessLayer;

import matthew.portfolio.Users.PresentationLayer.UserResponseDTO;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface UserService {


    List<UserResponseDTO> getAllUser();
}
