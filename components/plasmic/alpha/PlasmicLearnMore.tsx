// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ZK3Ka3GLBNfX7wb1NZz6y
// Component: uXKyS_1HHPeN

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import DefaultLayout from "../../DefaultLayout"; // plasmic-import: 3DHGFMCCchpq/component
import Nav from "../../Nav"; // plasmic-import: M7FSrNvh01Bb/component
import Logo from "../../Logo"; // plasmic-import: x-WUVb1UdtEk/component
import AuthButton from "../../AuthButton"; // plasmic-import: 1JFfF43ycoS1/component
import NavGroup from "../../NavGroup"; // plasmic-import: 23y1SDggi8Ko/component
import Footer from "../../Footer"; // plasmic-import: MdFayujW6N0n/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_alpha.module.css"; // plasmic-import: ZK3Ka3GLBNfX7wb1NZz6y/projectcss
import sty from "./PlasmicLearnMore.module.css"; // plasmic-import: uXKyS_1HHPeN/css

import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: IB_RYl67U9w9/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: wXhjyFdhDt7b/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: 6m0AkRk1brN4/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: LpAxg6jRC7f2/icon

createPlasmicElementProxy;

export type PlasmicLearnMore__VariantMembers = {};
export type PlasmicLearnMore__VariantsArgs = {};
type VariantPropType = keyof PlasmicLearnMore__VariantsArgs;
export const PlasmicLearnMore__VariantProps = new Array<VariantPropType>();

export type PlasmicLearnMore__ArgsType = {};
type ArgPropType = keyof PlasmicLearnMore__ArgsType;
export const PlasmicLearnMore__ArgProps = new Array<ArgPropType>();

export type PlasmicLearnMore__OverridesType = {
  root?: p.Flex<"div">;
  defaultLayout?: p.Flex<typeof DefaultLayout>;
  foreground?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  foreground2?: p.Flex<"div">;
  navGroup?: p.Flex<typeof NavGroup>;
};

export interface DefaultLearnMoreProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLearnMore__RenderFunc(props: {
  variants: PlasmicLearnMore__VariantsArgs;
  args: PlasmicLearnMore__ArgsType;
  overrides: PlasmicLearnMore__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <DefaultLayout
            data-plasmic-name={"defaultLayout"}
            data-plasmic-override={overrides.defaultLayout}
            className={classNames("__wab_instance", sty.defaultLayout)}
            slot={
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__e6Kbh)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__oaMk6)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"foreground"}
                    data-plasmic-override={overrides.foreground}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.foreground)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__zmXcy
                      )}
                    >
                      {"Values"}
                    </div>
                    <h2
                      data-plasmic-name={"h2"}
                      data-plasmic-override={overrides.h2}
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2
                      )}
                    >
                      {"Not just another design"}
                    </h2>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pT8Su
                      )}
                    >
                      {
                        "A euismod eros a hendrerit tristique suscipit sit aptent dolor adipiscing inceptos cras ullamcorper a vivamus parturient."
                      }
                    </div>
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"foreground2"}
                    data-plasmic-override={overrides.foreground2}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.foreground2)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__sfd9N)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ndM58
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ua19H
                          )}
                        >
                          <Icon2Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__w6Cdr
                            )}
                            role={"img"}
                          />
                        </div>
                        {false ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__l42Zu
                            )}
                          >
                            <Icon2Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__aeJgH
                              )}
                              role={"img"}
                            />
                          </div>
                        ) : null}
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__bXtq
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__bQaRw
                            )}
                          >
                            {"Welcoming atmosphere"}
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__ePiH
                            )}
                          >
                            {
                              "Orci commodo maecenas fringilla ad nec amet tempus mattis platea eget tortor sit dolor etiam a ullamcorper varius."
                            }
                          </div>
                        </p.Stack>
                      </p.Stack>
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__iLXo2
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__jce9V
                          )}
                        >
                          <Icon3Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__lcYw7
                            )}
                            role={"img"}
                          />
                        </div>
                        {false ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox___7D69F
                            )}
                          >
                            <Icon2Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg___1Hdda
                              )}
                              role={"img"}
                            />
                          </div>
                        ) : null}
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__c42I
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wPi6V
                            )}
                          >
                            {"Tested and secure"}
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__zbX47
                            )}
                          >
                            {
                              "Feugiat sapien ornare vivamus bibendum a ullamcorper feugiat faucibus feugiat blandit a per imperdiet dapibus metus ut scelerisque sagittis felis nostra per accumsan rutrum."
                            }
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </p.Stack>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__ovlc4)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___6GahN
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__jJq4
                          )}
                        >
                          <Icon4Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__ci510
                            )}
                            role={"img"}
                          />
                        </div>
                        {false ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__j0EZj
                            )}
                          >
                            <Icon2Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__mEYkF
                              )}
                              role={"img"}
                            />
                          </div>
                        ) : null}
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__wbHh6
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__vmY
                            )}
                          >
                            {"Mindful notifications"}
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__twypO
                            )}
                          >
                            {
                              "Porttitor feugiat a scelerisque nullam parturient vestibulum tempor a litora suscipit arcu potenti varius venenatis venenatis dapibus fames adipiscing in in taciti."
                            }
                          </div>
                        </p.Stack>
                      </p.Stack>
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__qYI2
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__b24Q
                          )}
                        >
                          <Icon5Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__agaJj
                            )}
                            role={"img"}
                          />
                        </div>
                        {false ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__miUfr
                            )}
                          >
                            <Icon2Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__ysEhD
                              )}
                              role={"img"}
                            />
                          </div>
                        ) : null}
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ltVf2
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__vVz5F
                            )}
                          >
                            {"Real-time results"}
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__fkx3
                            )}
                          >
                            {
                              "Scelerisque facilisi at class a inceptos mi aliquet vestibulum taciti platea amet litora quisque mus parturient a mauris arcu."
                            }
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                  <NavGroup
                    data-plasmic-name={"navGroup"}
                    data-plasmic-override={overrides.navGroup}
                    className={classNames("__wab_instance", sty.navGroup)}
                  />
                </p.Stack>
              </p.Stack>
            }
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "defaultLayout",
    "foreground",
    "h2",
    "foreground2",
    "navGroup"
  ],
  defaultLayout: [
    "defaultLayout",
    "foreground",
    "h2",
    "foreground2",
    "navGroup"
  ],
  foreground: ["foreground", "h2"],
  h2: ["h2"],
  foreground2: ["foreground2"],
  navGroup: ["navGroup"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  defaultLayout: typeof DefaultLayout;
  foreground: "div";
  h2: "h2";
  foreground2: "div";
  navGroup: typeof NavGroup;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLearnMore__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLearnMore__VariantsArgs;
    args?: PlasmicLearnMore__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLearnMore__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLearnMore__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLearnMore__ArgProps,
          internalVariantPropNames: PlasmicLearnMore__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLearnMore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLearnMore";
  } else {
    func.displayName = `PlasmicLearnMore.${nodeName}`;
  }
  return func;
}

export const PlasmicLearnMore = Object.assign(
  // Top-level PlasmicLearnMore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    defaultLayout: makeNodeComponent("defaultLayout"),
    foreground: makeNodeComponent("foreground"),
    h2: makeNodeComponent("h2"),
    foreground2: makeNodeComponent("foreground2"),
    navGroup: makeNodeComponent("navGroup"),

    // Metadata about props expected for PlasmicLearnMore
    internalVariantProps: PlasmicLearnMore__VariantProps,
    internalArgProps: PlasmicLearnMore__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLearnMore;
/* prettier-ignore-end */
