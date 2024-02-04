package matthew.portfolio.Projects.PresentationLayer;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import matthew.portfolio.Projects.DataLayer.ProjectType;
import matthew.portfolio.Work.DataLayer.Status;
import matthew.portfolio.Work.DataLayer.Type;

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