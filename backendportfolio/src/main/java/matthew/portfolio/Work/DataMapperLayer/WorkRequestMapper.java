package matthew.portfolio.Work.DataMapperLayer;

import matthew.portfolio.Work.DataLayer.Work;
import matthew.portfolio.Work.PresentationLayer.WorkRequestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface WorkRequestMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "workId", ignore = true)
    @Mapping(source = "workTitle", target = "workTitle")
    @Mapping(source = "workPlaceName", target = "workPlaceName")
    @Mapping(source = "location", target = "location")
    @Mapping(source = "type", target = "type")
    @Mapping(source = "duration", target = "duration")
    @Mapping(source = "status", target = "status")
    @Mapping(source = "description", target = "description")


    Work requestModelToEntity(WorkRequestDTO workRequestDTO);
}