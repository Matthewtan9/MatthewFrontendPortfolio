package matthew.portfolio.Projects.DataMapperLayer;



import matthew.portfolio.Projects.DataLayer.Project;
import matthew.portfolio.Projects.PresentationLayer.ProjectRequestDTO;
import matthew.portfolio.Projects.PresentationLayer.ProjectResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProjectResponseMapper {

    @Mapping(source = "projectId", target = "projectId")
    @Mapping(source = "projectName", target = "projectName")
    @Mapping(source = "projectDescription", target = "projectDescription")
    @Mapping(source = "projectDuration", target = " projectDuration")
    @Mapping(source = "projectType", target = "projectType")
    @Mapping(source = "projectSkill", target = "projectSkill")
    @Mapping(source = "githubLink", target = "githubLink")

    Project requestModelToEntity(ProjectRequestDTO projectRequestDTO);

    List<ProjectResponseDTO> entityListToResponseModelList(List<Project> projects);

}