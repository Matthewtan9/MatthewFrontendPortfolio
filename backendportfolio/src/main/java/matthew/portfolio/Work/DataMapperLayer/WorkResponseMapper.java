package matthew.portfolio.Work.DataMapperLayer;

import matthew.portfolio.Work.DataLayer.Work;
import matthew.portfolio.Work.PresentationLayer.WorkResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")

public interface WorkResponseMapper {


    @Mapping(source = "workId", target = "workId")
    @Mapping(source = "workTitle", target = "workTitle")
    @Mapping(source = "workPlaceName", target = "workPlaceName")
    @Mapping(source = "location", target = "location")
    @Mapping(source = "type", target = "type")
    @Mapping(source = "duration", target = "duration")
    @Mapping(source = "status", target = "status")
    @Mapping(source = "description", target = "description")


    WorkResponseDTO entityToResponseModel(Work work);
    List<WorkResponseDTO> entityListToResponseModelList(List<Work> works);
}
