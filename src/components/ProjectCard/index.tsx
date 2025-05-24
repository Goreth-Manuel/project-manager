import { CardContainer, StyledCard, IconWrapper, CardContent } from "./style";
import { FaCalendarCheck, FaSpinner, FaHourglassHalf, FaUsers } from "react-icons/fa";

export function ProjectCard() {
  return (
    <CardContainer>
      <StyledCard>
        <IconWrapper bgColor="#333">
          <FaCalendarCheck size={20} />
        </IconWrapper>
        <CardContent>
          <h4>Bookings</h4>
          <h2>281</h2>
          <p className="green">+55% than last week</p>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <IconWrapper bgColor="#007bff">
          <FaUsers size={20} />
        </IconWrapper>
        <CardContent>
          <h4>Today's Users</h4>
          <h2>2,300</h2>
          <p className="green">+3% than last month</p>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <IconWrapper bgColor="#28a745">
          <FaSpinner size={20} />
        </IconWrapper>
        <CardContent>
          <h4>Revenue</h4>
          <h2>34k</h2>
          <p className="green">+1% than yesterday</p>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <IconWrapper bgColor="#e91e63">
          <FaHourglassHalf size={20} />
        </IconWrapper>
        <CardContent>
          <h4>Followers</h4>
          <h2>+91</h2>
          <p>Just updated</p>
        </CardContent>
      </StyledCard>
    </CardContainer>
  );
}
