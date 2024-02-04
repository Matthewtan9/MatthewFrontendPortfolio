package matthew.portfolio.Classes.BusinessLayer;

import lombok.extern.slf4j.Slf4j;
import matthew.portfolio.Classes.DataLayer.ClassRepository;
import matthew.portfolio.Classes.DataMapperLayer.ClassResponseMapper;
import matthew.portfolio.Classes.PresentationLayer.ClassResponseDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class ClassServiceImpl implements ClassService {

    private final ClassRepository classRepository;
    // private final ClassService ClassService;

    private final ClassResponseMapper classResponseMapper;

    public ClassServiceImpl(ClassRepository classRepository, ClassResponseMapper classResponseMapper) {
        this.classRepository = classRepository;
        this.classResponseMapper = classResponseMapper;

    }


    @Override
    public List<ClassResponseDTO> getAllClass() {
        return classResponseMapper.entityListToResponseModelList(classRepository.findAll());
    }
}
