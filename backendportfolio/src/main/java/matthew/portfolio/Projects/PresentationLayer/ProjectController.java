package matthew.portfolio.Projects.PresentationLayer;

import lombok.extern.slf4j.Slf4j;
import matthew.portfolio.Projects.BusinessLayer.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true", allowedHeaders = {"xsrf-token", "content-type"})
@RequestMapping("projects")
public class ProjectController {



    private ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping()
    public ResponseEntity<List<ProjectResponseDTO>> getAllProject() {
        return  ResponseEntity.ok().body(projectService.getAllProject());
    }
}
