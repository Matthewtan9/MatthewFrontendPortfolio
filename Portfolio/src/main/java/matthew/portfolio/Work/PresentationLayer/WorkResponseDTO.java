package matthew.portfolio.Work.PresentationLayer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import matthew.portfolio.Work.DataLayer.Status;
import matthew.portfolio.Work.DataLayer.Type;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WorkResponseDTO {

    private Integer id;
    private String workId;
    private String workTitle;
    private String workPlaceName;
    private String location;
    private Type type;
    private String duration;
    private Status status;
    private String description;
}