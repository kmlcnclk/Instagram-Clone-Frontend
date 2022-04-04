import {
  SearchIcon,
  HomeFillIcon,
  MessageUnFillIcon,
  CreatePlusUnFillIcon,
  ExploreUnFillIcon,
  HeartUnFillIcon,
  CancelIcon,
  PrevIcon,
  NextIcon,
} from './Icons';

const Icon = ({ name, size, height, width, onClickFunc, color, className }) => {
  const icons = {
    searchIcon: SearchIcon,
    homeFillIcon: HomeFillIcon,
    messageUnFillIcon: MessageUnFillIcon,
    createPlusUnFillIcon: CreatePlusUnFillIcon,
    exploreUnFillIcon: ExploreUnFillIcon,
    heartUnFillIcon: HeartUnFillIcon,
    cancelIcon: CancelIcon,
    prev: PrevIcon,
    next: NextIcon,
  };

  const Component = icons[name];
  if (size) {
    return (
      <Component
        size={size}
        onClickFunc={onClickFunc}
        color={color}
        className={className}
      />
    );
  } else if (height && width) {
    return (
      <Component
        width={width}
        height={height}
        onClickFunc={onClickFunc}
        color={color}
        className={className}
      />
    );
  }
};

export default Icon;
