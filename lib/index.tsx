import Checkbox from '@/components/Checkbox';
import RadioButton from '@/components/RadioButton';
import Chip from '@/components/Chip';
import Button from './components/Button';
import { Dropdown, MultipleSelectDropdown } from './components/Dropdown';
import Input from './components/Input';
import Pagination from './components/Pagination';
import Card from '@/components/Card';
import Layout from '@/components/Layout';
import Table, { ITableHead } from '@/components/Table';
import Modal from '@/components/Modal';
import Spinner from '@/components/Spinner';
import DatePicker from '@/components/DatePicker';
import IconButton from './components/IconButton/index.jsx';
import Tag from '@/components/Tag/index.jsx';
import useInfiniteScroll, {
  InfiniteScrollWrapper,
} from './components/InfiniteScroll/index.jsx';
import useSnackbarToast from './hooks/useSnackbarToast.jsx';
import * as Icons from './components/Icons';
import Dialog, {
  IDialogProps,
  useDialog,
  dialogStore,
  openExternalDialog,
  closeExternalDialog,
  DialogProvider,
} from './components/Dialog/index.jsx';
import useModal from './hooks/useModal.jsx';

/**
 * component exports
 */
export {
  Checkbox,
  Chip,
  Dropdown,
  MultipleSelectDropdown,
  Input,
  Pagination,
  RadioButton,
  Card,
  Layout,
  Table,
  Modal,
  DatePicker,
  Button,
  Tag,
  Spinner,
  InfiniteScrollWrapper,
  Dialog,
  DialogProvider,
  IconButton,
  useSnackbarToast,
  useModal,
  useDialog,
  useInfiniteScroll,
  dialogStore,
  openExternalDialog,
  closeExternalDialog,
};

/**
 * type exports
 */
export type { ITableHead, IDialogProps };
/**
 * icon packages
 * TODO: export방식 개선
 */
export const CalendarDaysSolid = Icons.CalendarDaysSolid;
export const TrashCanSolid = Icons.TrashCanSolid;
export const CircleQuestionSolid = Icons.CircleQuestionSolid;
export const ArrowUpFromBracketSolid = Icons.ArrowUpFromBracketSolid;
export const ArrowRightFromBracketSolid = Icons.ArrowRightFromBracketSolid;
export const CircleCheckSolid = Icons.CircleCheckSolid;

export const ArrowRotateRightSolid = Icons.ArrowRotateRightSolid;
export const AnglesUpSolid = Icons.AnglesUpSolid;
export const ClockSolid = Icons.ClockSolid;
export const ArrowDownFromBracketSolid = Icons.ArrowDownFromBracketSolid;
export const AngleUpSolid = Icons.AngleUpSolid;
export const EllipsisSolid = Icons.EllipsisSolid;

export const AnglesRightSolid = Icons.AnglesRightSolid;
export const CircleMinusSolid = Icons.CircleMinusSolid;
export const AngleLeftSolid = Icons.AngleLeftSolid;
export const XmarkSolid = Icons.XmarkSolid;
export const AnglesLeftSolid = Icons.AnglesLeftSolid;
export const ChevronUpSolid = Icons.ChevronUpSolid;
export const AngleDownSolid = Icons.AngleDownSolid;
export const EllipsisVerticalSolid = Icons.EllipsisVerticalSolid;
export const AnglesDownSolid = Icons.AnglesDownSolid;
export const CircleInfoSolid = Icons.CircleInfoSolid;
export const ArrowUpSolid = Icons.ArrowUpSolid;
export const CircleUserSolid = Icons.CircleUserSolid;
export const CircleExclamationSolid = Icons.CircleExclamationSolid;
export const CheckSolid = Icons.CheckSolid;
export const BarsSolid = Icons.BarsSolid;
export const ArrowRightSolid = Icons.ArrowRightSolid;
export const ChevronRightSolid = Icons.ChevronRightSolid;
export const ArrowDownSolid = Icons.ArrowDownSolid;
export const ChevronLeftSolid = Icons.ChevronLeftSolid;
export const ArrowRightToBracketSolid = Icons.ArrowRightToBracketSolid;
export const ArrowLeftSolid = Icons.ArrowLeftSolid;
export const DeleteLeftSolid = Icons.DeleteLeftSolid;
export const ChevronDownSolid = Icons.ChevronDownSolid;

export const AngleRightSolid = Icons.AngleRightSolid;
export const TriangleExclamationSolid = Icons.TriangleExclamationSolid;
export const CirclePlusSolid = Icons.CirclePlusSolid;
export const EyeOnSolid = Icons.EyeOnSolid;
export const EyeOffSolid = Icons.EyeOffSolid;
export const SearchIcon = Icons.SearchIcon;
export const PlusIcon = Icons.PlusIcon;
