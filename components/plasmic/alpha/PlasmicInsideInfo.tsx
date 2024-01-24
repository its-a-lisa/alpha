// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ZK3Ka3GLBNfX7wb1NZz6y
// Component: -0cd1sMaAc0v

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

import { useScreenVariants as useScreenVariantsbByOFjTZbjEa } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BByOFjTZbjEA/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_alpha.module.css"; // plasmic-import: ZK3Ka3GLBNfX7wb1NZz6y/projectcss
import sty from "./PlasmicInsideInfo.module.css"; // plasmic-import: -0cd1sMaAc0v/css

import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: IB_RYl67U9w9/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: wXhjyFdhDt7b/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: 6m0AkRk1brN4/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: LpAxg6jRC7f2/icon

createPlasmicElementProxy;

export type PlasmicInsideInfo__VariantMembers = {};
export type PlasmicInsideInfo__VariantsArgs = {};
type VariantPropType = keyof PlasmicInsideInfo__VariantsArgs;
export const PlasmicInsideInfo__VariantProps = new Array<VariantPropType>();

export type PlasmicInsideInfo__ArgsType = {};
type ArgPropType = keyof PlasmicInsideInfo__ArgsType;
export const PlasmicInsideInfo__ArgProps = new Array<ArgPropType>();

export type PlasmicInsideInfo__OverridesType = {
  root?: p.Flex<"div">;
  defaultLayout?: p.Flex<typeof DefaultLayout>;
  nav?: p.Flex<typeof Nav>;
  foreground?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  foreground2?: p.Flex<"div">;
  navGroup?: p.Flex<typeof NavGroup>;
};

export interface DefaultInsideInfoProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInsideInfo__RenderFunc(props: {
  variants: PlasmicInsideInfo__VariantsArgs;
  args: PlasmicInsideInfo__ArgsType;
  overrides: PlasmicInsideInfo__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbByOFjTZbjEa()
  });

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
                className={classNames(projectcss.all, sty.freeBox__lZg3Q)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mEkRn)}
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
                        sty.text__or3Zt
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
                        sty.text__qZlf
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
                      className={classNames(projectcss.all, sty.freeBox__xxMKt)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__eXvmY
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__fVgux
                          )}
                        >
                          <Icon2Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__vww1B
                            )}
                            role={"img"}
                          />
                        </div>
                        {false ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__mmBXm
                            )}
                          >
                            <Icon2Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__b1Iek
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
                            sty.freeBox__asCkl
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__rYs5
                            )}
                          >
                            {"Welcoming atmosphere"}
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___0StBu
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
                          sty.freeBox___2Z8Wu
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__k44B5
                          )}
                        >
                          <Icon3Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__um7Uv
                            )}
                            role={"img"}
                          />
                        </div>
                        {false ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__k0Wr
                            )}
                          >
                            <Icon2Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__x8S3H
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
                            sty.freeBox___73PAr
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___7ZmE
                            )}
                          >
                            {"Tested and secure"}
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__bL6Mr
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
                      className={classNames(projectcss.all, sty.freeBox__mJG8)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__zncI9
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__fl1Gq
                          )}
                        >
                          <Icon4Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__hkCTl
                            )}
                            role={"img"}
                          />
                        </div>
                        {false ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__nwHbv
                            )}
                          >
                            <Icon2Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__llC23
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
                            sty.freeBox__s1Ko9
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__mvtBi
                            )}
                          >
                            {"Mindful notifications"}
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__sNpHm
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
                          sty.freeBox__ucok6
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__azgzx
                          )}
                        >
                          <Icon5Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__hxvCy
                            )}
                            role={"img"}
                          />
                        </div>
                        {false ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__wXdNk
                            )}
                          >
                            <Icon2Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__qPDaB
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
                            sty.freeBox__bhQIm
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__jtbDo
                            )}
                          >
                            {"Real-time results"}
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__fi88
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
          >
            <Nav
              data-plasmic-name={"nav"}
              data-plasmic-override={overrides.nav}
              className={classNames("__wab_instance", sty.nav)}
              states={"signedInUser"}
            />
          </DefaultLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "defaultLayout",
    "nav",
    "foreground",
    "h2",
    "foreground2",
    "navGroup"
  ],
  defaultLayout: [
    "defaultLayout",
    "nav",
    "foreground",
    "h2",
    "foreground2",
    "navGroup"
  ],
  nav: ["nav"],
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
  nav: typeof Nav;
  foreground: "div";
  h2: "h2";
  foreground2: "div";
  navGroup: typeof NavGroup;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInsideInfo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInsideInfo__VariantsArgs;
    args?: PlasmicInsideInfo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInsideInfo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInsideInfo__ArgsType,
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
          internalArgPropNames: PlasmicInsideInfo__ArgProps,
          internalVariantPropNames: PlasmicInsideInfo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInsideInfo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInsideInfo";
  } else {
    func.displayName = `PlasmicInsideInfo.${nodeName}`;
  }
  return func;
}

export const PlasmicInsideInfo = Object.assign(
  // Top-level PlasmicInsideInfo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    defaultLayout: makeNodeComponent("defaultLayout"),
    nav: makeNodeComponent("nav"),
    foreground: makeNodeComponent("foreground"),
    h2: makeNodeComponent("h2"),
    foreground2: makeNodeComponent("foreground2"),
    navGroup: makeNodeComponent("navGroup"),

    // Metadata about props expected for PlasmicInsideInfo
    internalVariantProps: PlasmicInsideInfo__VariantProps,
    internalArgProps: PlasmicInsideInfo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicInsideInfo;
/* prettier-ignore-end */
