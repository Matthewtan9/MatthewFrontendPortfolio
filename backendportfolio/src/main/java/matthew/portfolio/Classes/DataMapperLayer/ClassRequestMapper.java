package matthew.portfolio.Classes.DataMapperLayer;

import matthew.portfolio.Classes.DataLayer.Class;
import matthew.portfolio.Classes.PresentationLayer.ClassRequestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface ClassRequestMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "classId", ignore = true)
    @Mapping(source = "semester", target= "semester ")
    @Mapping(source = "className", target = "className")
    @Mapping(source = "teacherName", target = "teacherName")
    @Mapping(source = "skills", target = "skills")
    @Mapping(source = "description", target = "description")
    Class requestModelToEntity(ClassRequestDTO classRequestDTO);
}