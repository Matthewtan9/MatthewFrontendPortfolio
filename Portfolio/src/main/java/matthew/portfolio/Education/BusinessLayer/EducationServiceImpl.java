//package matthew.portfolio.Education.BusinessLayer;
//
//
//import matthew.portfolio.Education.DataLayer.EducationRepository;
//import matthew.portfolio.Education.DataMapperLayer.EducationResponseMapper;
//
//import java.util.List;
//
//public class EducationServiceImpl implements EducationService{
//    private final EducationRepository educationRepository;
//    // private final EducationService EducationService;
//
//    private final EducationResponseMapper educationResponseMapper;
//
//    public EducationServiceImpl(EducationRepository educationRepository, EducationResponseMapper educationResponseMapper) {
//        this.educationRepository = educationRepository;
//        this.educationResponseMapper = educationResponseMapper;
//
//    }
//
//
//    @Override
//    public List<EducationResponseDTO> getAllEducation() {
//        return  educationResponseMapper.entityListToResponseModelList(educationRepository.findAll());
//    }
//}