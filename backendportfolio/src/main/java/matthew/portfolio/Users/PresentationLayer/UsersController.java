package matthew.portfolio.Users.PresentationLayer;


import lombok.extern.slf4j.Slf4j;
import matthew.portfolio.Users.BusinessLayer.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://matbackend-3705c9a27540.herokuapp.com","http://localhost:8080"}, allowCredentials = "true", allowedHeaders = {"xsrf-token", "content-type"})
@RequestMapping("/users")
public class UsersController {



    private UserService userService;

    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<List<UserResponseDTO>> getAllUser() {
        return  ResponseEntity.ok().body(userService.getAllUser());
    }



}