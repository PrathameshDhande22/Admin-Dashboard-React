import { CloseOutlined } from "@ant-design/icons";
import { Modal, Typography } from "antd";

const Termsnuse = () => {
  const showModal = () => {
    Modal.info({
      title: "Terms and Use",
      closable: true,
      closeIcon: <CloseOutlined />,
      content: (
        <Typography.Paragraph>
          By accessing and using the Admins Dashboard, built using React and Ant
          Design, you agree to the following terms: The dashboard is provided
          for informational purposes only and should not be relied upon as the
          sole basis for business decisions. The statistics displayed are
          subject to change and may not be entirely accurate or up-to-date. You
          are responsible for maintaining the confidentiality of your account
          information and for all activities that occur under your account. We
          reserve the right to suspend or terminate your access to the dashboard
          at any time without notice. Use of the dashboard is at your own risk,
          and we disclaim any liability for damages arising from its use.
        </Typography.Paragraph>
      ),
    });
  };
  return (
    <div className="privacy">
      <Typography.Link onClick={showModal}>Terms and Use</Typography.Link>
    </div>
  );
};

export default Termsnuse;
