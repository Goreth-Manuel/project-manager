export interface Notification {
    type: string;
    count: number;
  }
  
  export interface HeaderViewModel {
    notifications: Notification[];
    profileImage: string;
  }
  
  export const useHeaderViewModel = (): HeaderViewModel => {
    return {
      notifications: [
        { type: "alert", count: 5 },
        { type: "tasks", count: 5 },
        { type: "messages", count: 7 },
      ],
      profileImage: "https://randomuser.me/api/portraits/women/50.jpg",
    };
  };
  