package matthew.portfolio.Users.BusinessLayer;


import lombok.extern.slf4j.Slf4j;
import matthew.portfolio.Users.DataLayer.UserRepository;
import matthew.portfolio.Users.DataMapperLayer.UserResponseMapper;
import matthew.portfolio.Users.PresentationLayer.UserResponseDTO;
import org.springframework.stereotype.Service;

import java.util.List;


@Slf4j
@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
   // private final UserService userService;

    private final UserResponseMapper userResponseMapper;

    public UserServiceImpl(UserRepository userRepository, UserResponseMapper userResponseMapper) {
        this.userRepository = userRepository;
        this.userResponseMapper = userResponseMapper;

    }


    @Override
    public List<UserResponseDTO> getAllUser() {
        return  userResponseMapper.entityListToResponseModelList(userRepository.findAll());
    }
}
