package matthew.portfolio.Projects.PresentationLayer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import matthew.portfolio.Projects.DataLayer.ProjectType;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectRequestDTO {


    private String projectId;
    private String projectName;
    private String projectDescription;
    private String projectDuration;
    private ProjectType projectType;
    private String projectSkill;
    private String githubLink;



    public static String generateUUIDString(){
        return UUID.randomUUID().toString();
    }
}