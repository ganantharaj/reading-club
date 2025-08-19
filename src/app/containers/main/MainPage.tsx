import { MemberCard } from '../../components/main/MemberCard';
import { useMembersStateContext } from '../../modules/members';

export const MainPage = () => {
  const { loading, items } = useMembersStateContext();

  console.log(`loading`, loading);
  console.log(`items`, items);

  return (
    <div>
      This contains all the routes needed for Main Page and redirects to the Main page components
      {/* Get the member list and display here */}
      <MemberCard />
    </div>
  );
};
