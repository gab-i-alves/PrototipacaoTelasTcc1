// Funções para navegação entre páginas
function navigateTo(page) {
    window.location.href = page;
}

// Funções para o menu sidebar mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('dashboard-overlay');
    
    if (mobileMenuToggle && sidebar && overlay) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('open');
        });
        
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
        });
    }
});

// Sistema de notificações
class NotificationSystem {
    constructor() {
        this.initModal();
        this.notifications = [
            {
                id: 1,
                type: 'info',
                message: 'Bem-vindo ao ParkinsonCheck! Complete seu perfil para uma experiência personalizada.',
                time: 'Agora mesmo',
                read: false
            },
            {
                id: 2,
                type: 'success',
                message: 'Seu último teste da Espiral foi concluído com sucesso.',
                time: '1 hora atrás',
                read: false
            },
            {
                id: 3,
                type: 'warning',
                message: 'Lembrete: Você tem um teste programado para amanhã.',
                time: '2 horas atrás',
                read: true
            }
        ];
    }

    initModal() {
        // Criar o modal de notificações se não existir
        if (!document.getElementById('notification-modal')) {
            const modal = document.createElement('div');
            modal.id = 'notification-modal';
            modal.className = 'notification-modal';
            
            modal.innerHTML = `
                <div class="notification-content">
                    <div class="notification-header">
                        <h3 class="notification-title">Notificações</h3>
                        <button class="notification-close">&times;</button>
                    </div>
                    <div class="notification-body">
                        <div class="notification-list" id="notification-list">
                            <!-- Notificações serão inseridas aqui -->
                        </div>
                    </div>
                    <div class="notification-footer">
                        <a href="#">Ver todas as notificações</a>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Configurar evento de fechar
            const closeBtn = modal.querySelector('.notification-close');
            closeBtn.addEventListener('click', () => this.closeModal());
            
            // Fechar ao clicar fora do conteúdo
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }
    }

    openModal() {
        const modal = document.getElementById('notification-modal');
        if (modal) {
            this.renderNotifications();
            modal.classList.add('open');
        }
    }

    closeModal() {
        const modal = document.getElementById('notification-modal');
        if (modal) {
            modal.classList.remove('open');
        }
    }

    renderNotifications() {
        const listElement = document.getElementById('notification-list');
        if (!listElement) return;
        
        listElement.innerHTML = '';
        
        if (this.notifications.length === 0) {
            listElement.innerHTML = '<p class="text-center py-4">Nenhuma notificação.</p>';
            return;
        }
        
        this.notifications.forEach(notification => {
            const notificationItem = document.createElement('div');
            notificationItem.className = `notification-item ${notification.read ? 'read' : ''}`;
            
            notificationItem.innerHTML = `
                <div class="notification-icon ${notification.type}">
                    <i class="fas ${this.getIconForType(notification.type)}"></i>
                </div>
                <div class="notification-info">
                    <div class="notification-message">${notification.message}</div>
                    <div class="notification-meta">
                        <span class="notification-time">${notification.time}</span>
                        ${!notification.read ? '<span class="notification-status">Não lida</span>' : ''}
                    </div>
                </div>
            `;
            
            listElement.appendChild(notificationItem);
        });
    }

    getIconForType(type) {
        switch (type) {
            case 'info': return 'fa-info';
            case 'success': return 'fa-check';
            case 'warning': return 'fa-exclamation-triangle';
            case 'error': return 'fa-times-circle';
            default: return 'fa-bell';
        }
    }

    getUnreadCount() {
        return this.notifications.filter(n => !n.read).length;
    }

    updateBadge() {
        const badge = document.querySelector('.notifications-count');
        if (badge) {
            const count = this.getUnreadCount();
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    }
}

// Inicializar o sistema de notificações
document.addEventListener('DOMContentLoaded', function() {
    window.notificationSystem = new NotificationSystem();
    
    // Configurar o botão de notificações
    const notificationBtn = document.querySelector('.notifications-badge');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            window.notificationSystem.openModal();
        });
    }
    
    // Atualizar o contador de notificações
    window.notificationSystem.updateBadge();
});
