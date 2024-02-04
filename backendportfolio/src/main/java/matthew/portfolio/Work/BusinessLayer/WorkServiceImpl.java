package matthew.portfolio.Work.BusinessLayer;

import lombok.extern.slf4j.Slf4j;
import matthew.portfolio.Work.DataLayer.WorkRepository;
import matthew.portfolio.Work.DataMapperLayer.WorkResponseMapper;
import matthew.portfolio.Work.PresentationLayer.WorkResponseDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class WorkServiceImpl implements WorkService {

    private final WorkRepository workRepository;
    // private final WorkService WorkService;

    private final WorkResponseMapper workResponseMapper;

    public WorkServiceImpl(WorkRepository workRepository, WorkResponseMapper workResponseMapper) {
        this.workRepository = workRepository;
        this.workResponseMapper = workResponseMapper;

    }


    @Override
    public List<WorkResponseDTO> getAllWork() {
        return  workResponseMapper.entityListToResponseModelList(workRepository.findAll());
    }
}
