package matthew.portfolio.Projects.BusinessLayer;

import matthew.portfolio.Projects.PresentationLayer.ProjectResponseDTO;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ProjectService {

    List<ProjectResponseDTO> getAllProject();
}
