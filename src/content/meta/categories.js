import SettingsIcon from 'react-feather/dist/icons/settings';
import GitBranchIcon from 'react-feather/dist/icons/git-branch';
import ImageIcon from 'react-feather/dist/icons/image';
import FolderPlusIcon from 'react-feather/dist/icons/folder-plus';

export const categories = [
  { name: 'general', label: 'شروع', icon: SettingsIcon },
  { name: 'first', label: 'انواع کاشت', icon: GitBranchIcon },
  { name: 'second', label: 'بسترها', icon: ImageIcon },
  { name: 'last', label: 'مشکلات', icon: FolderPlusIcon }
];

export default categories;
