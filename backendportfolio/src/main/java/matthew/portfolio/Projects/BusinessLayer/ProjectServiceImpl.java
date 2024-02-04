package matthew.portfolio.Projects.BusinessLayer;

import lombok.extern.slf4j.Slf4j;
import matthew.portfolio.Projects.DataLayer.ProjectRepository;
import matthew.portfolio.Projects.DataMapperLayer.ProjectResponseMapper;
import matthew.portfolio.Projects.PresentationLayer.ProjectResponseDTO;
import org.springframework.stereotype.Service;

import java.util.List;
@Slf4j
@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    // private final ProjectService ProjectService;

    private final ProjectResponseMapper projectResponseMapper;

    public ProjectServiceImpl(ProjectRepository projectRepository, ProjectResponseMapper projectResponseMapper) {
        this.projectRepository = projectRepository;
        this.projectResponseMapper = projectResponseMapper;

    }
    @Override
    public List<ProjectResponseDTO> getAllProject() {
        return  projectResponseMapper.entityListToResponseModelList(projectRepository.findAll());
    }
}
