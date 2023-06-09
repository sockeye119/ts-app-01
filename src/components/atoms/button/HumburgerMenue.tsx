import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FC, memo } from "react";

type Props = {
  onOpen: () => void;
};

export const HumburgerMenueConst: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <>
      <IconButton
        aria-label="メニューボタン"
        size="sm"
        variant="unstyled"
        display={{ base: "block", md: "none" }}
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
    </>
  );
});
