package matthew.portfolio.Work.PresentationLayer;


import lombok.extern.slf4j.Slf4j;
import matthew.portfolio.Work.BusinessLayer.WorkService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true", allowedHeaders = {"xsrf-token", "content-type"})
@RequestMapping("works")
public class WorkController {



    private WorkService workService;

    public WorkController(WorkService workService) {
        this.workService = workService;
    }

    @GetMapping()
    public ResponseEntity<List<WorkResponseDTO>> getAllWork() {
        return  ResponseEntity.ok().body(workService.getAllWork());
    }


}