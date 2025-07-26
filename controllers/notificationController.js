let notifications = [];
let idCounter = 1;

exports.addNotification = (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Mensagem obrigatória' });
  }

  const notification = { id: idCounter++, message };
  notifications.push(notification);
  res.status(201).json(notification);
};

exports.getNotifications = (req, res) => {
  res.json(notifications);
};

exports.deleteNotification = (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = notifications.length;
  notifications = notifications.filter(n => n.id !== id);

  if (notifications.length === initialLength) {
    return res.status(404).json({ error: 'Notificação não encontrada' });
  }

  res.status(204).send();
};
