package matthew.portfolio.Classes.DataMapperLayer;


import matthew.portfolio.Classes.DataLayer.Class;
import matthew.portfolio.Classes.PresentationLayer.ClassResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")

public interface ClassResponseMapper {


    @Mapping(source = "classId", target = "classId")
    @Mapping(source = "semester", target = "semester")
    @Mapping(source = "className", target = "className")
    @Mapping(source = "teacherName", target = "teacherName")
    @Mapping(source = "skills", target = "skills")
    @Mapping(source = "description", target = "description")
    ClassResponseDTO entityToResponseModel(Class classes);

    List<ClassResponseDTO> entityListToResponseModelList(List<Class> classes);
}
