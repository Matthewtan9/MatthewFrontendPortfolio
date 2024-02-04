package matthew.portfolio.Projects.DataMapperLayer;

import matthew.portfolio.Projects.DataLayer.Project;
import matthew.portfolio.Projects.PresentationLayer.ProjectRequestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface ProjectRequestMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "projectId", ignore = true)
    @Mapping(source = "projectName", target = "projectName")
    @Mapping(source = "projectDescription", target = "projectDescription")
    @Mapping(source = "projectDuration", target = "projectDuration")

    @Mapping(source = "projectType", target = "projectType")
    @Mapping(source = "projectSkill", target = "projectSkill")
    @Mapping(source = "githubLink" , target = "githubLink")

    Project requestModelToEntity(ProjectRequestDTO projectRequestDTO);

}