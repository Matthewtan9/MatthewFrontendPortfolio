package matthew.portfolio.Classes.PresentationLayer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import matthew.portfolio.Classes.DataLayer.Semester;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClassResponseDTO {

    private String classId;
    private Semester semester;
    private String className;
    private String teacherName;
    private String skills;
    private String description;
}
