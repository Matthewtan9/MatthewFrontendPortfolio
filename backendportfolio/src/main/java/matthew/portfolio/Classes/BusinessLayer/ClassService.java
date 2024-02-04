package matthew.portfolio.Classes.BusinessLayer;

import matthew.portfolio.Classes.PresentationLayer.ClassResponseDTO;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface ClassService {
    List<ClassResponseDTO> getAllClass();
}
