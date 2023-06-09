import { Card, Space, Statistic } from "antd";
import PropTypes from "prop-types";

export const DSCard = ({ title, number, icon }) => {
  return (
    <>
      <Card>
        <Space direction="horizontal" size={8}>
          {icon}
          <Statistic value={number} title={title} />
        </Space>
      </Card>
    </>
  );
};

DSCard.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  icon: PropTypes.node,
};
