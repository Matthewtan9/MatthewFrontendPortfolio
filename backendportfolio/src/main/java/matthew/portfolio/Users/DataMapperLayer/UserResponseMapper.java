package matthew.portfolio.Users.DataMapperLayer;


import matthew.portfolio.Users.DataLayer.User;
import matthew.portfolio.Users.PresentationLayer.UserResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")

public interface UserResponseMapper {


    @Mapping(source = "userId", target = "userId")
    @Mapping(source = "firstName", target = "firstName")
    @Mapping(source = "lastName", target = "lastName")
    @Mapping(source = "age", target = "age")
    @Mapping(source = "email", target = "email")


    UserResponseDTO entityToResponseModel(User user);

    List<UserResponseDTO> entityListToResponseModelList(List<User> users);
}
