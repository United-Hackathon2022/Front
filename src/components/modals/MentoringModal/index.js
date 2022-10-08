import ModalContainer from '../../ModalContainer/Modals';
import MentoringImg from '../../../assets/modal_img/mentoring.svg';
import * as S from './style';
import { toast } from 'react-toastify';

const MentoringModal = () => {
  const TryConnect = () => {
    toast.success('상대방에게 연결신청을 하였습니다.');
  };
  return (
    <ModalContainer
      svg={MentoringImg}
      title="멘토링 연결하기"
      desc="나의 월경에 도움을 받아보세요."
    >
      <div>
        <S.Input placeholder="상대방의 코드를 입력해 주세요." />
        <S.Button onClick={TryConnect}>연결하기</S.Button>
      </div>
    </ModalContainer>
  );
};

export default MentoringModal;
