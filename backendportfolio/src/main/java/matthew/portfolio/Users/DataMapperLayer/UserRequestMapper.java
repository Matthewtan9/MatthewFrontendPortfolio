package matthew.portfolio.Users.DataMapperLayer;


import matthew.portfolio.Users.DataLayer.User;
import matthew.portfolio.Users.PresentationLayer.UserRequestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;




@Mapper(componentModel = "spring")
@Component
public interface UserRequestMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "userId", ignore = true)
    @Mapping(source = "firstName", target = "firstName")
    @Mapping(source = "lastName", target = "lastName")
    @Mapping(source = "age", target = "age")
    @Mapping(source = "email", target = "email")
    User requestModelToEntity(UserRequestDTO userRequestDTO);
}