package matthew.portfolio.Work.BusinessLayer;

import matthew.portfolio.Work.PresentationLayer.WorkResponseDTO;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface WorkService {
    List<WorkResponseDTO> getAllWork();
}
