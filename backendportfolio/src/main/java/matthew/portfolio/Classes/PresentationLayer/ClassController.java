package matthew.portfolio.Classes.PresentationLayer;

import lombok.extern.slf4j.Slf4j;
import matthew.portfolio.Classes.BusinessLayer.ClassService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true", allowedHeaders = {"xsrf-token", "content-type"})
@RequestMapping("classes")
public class ClassController {



    private ClassService classService;

    public ClassController(ClassService classService) {
        this.classService = classService;
    }

    @GetMapping()
    public ResponseEntity<List<ClassResponseDTO>> getAllClass() {
        return  ResponseEntity.ok().body(classService.getAllClass());
    }


}