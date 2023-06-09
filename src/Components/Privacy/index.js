import { CloseOutlined } from "@ant-design/icons";
import { Modal, Typography } from "antd";

const Privacy = () => {
  const showModal = () => {
    Modal.info({
      title: "Privacy Policy",
      closable: true,
      closeIcon: <CloseOutlined />,
      content: (
        <Typography.Paragraph style={{ textAlign: "justify" }}>
          We respect your privacy and are committed to protecting your personal
          information. The Admins Dashboard, built using React and Ant Design,
          allows you to view statistics of the company's products. We collect
          and use limited personal information, such as your name and email
          address, solely for authentication purposes. We do not share your
          information with third parties. We implement appropriate security
          measures to safeguard your data. By using the Admins Dashboard, you
          consent to the collection and use of your information as described in
          this policy. We may update the policy periodically, and any changes
          will be posted here.
        </Typography.Paragraph>
      ),
    });
  };
  return (
    <div className="privacy">
      <Typography.Link onClick={showModal}>Privacy Policy</Typography.Link>
    </div>
  );
};

export default Privacy;
