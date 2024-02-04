package matthew.portfolio.Classes.BusinessLayer;

import matthew.portfolio.Classes.PresentationLayer.ClassResponseDTO;
import matthew.portfolio.Users.PresentationLayer.UserResponseDTO;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface ClassService {
    List<ClassResponseDTO> getAllClass();
}
